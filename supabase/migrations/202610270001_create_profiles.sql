
-- Primera migración: perfiles de usuarios

CREATE TABLE public.profiles (
    id UUID PRIMARY KEY
        REFERENCES auth.users(id) ON DELETE RESTRICT,

    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,

    role TEXT NOT NULL
        CHECK (role IN ('PROFESORA', 'ALUMNO')),

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT profiles_first_name_not_blank
        CHECK (length(trim(first_name)) > 0),

    CONSTRAINT profiles_last_name_not_blank
        CHECK (length(trim(last_name)) > 0)
);

-- Activar Row Level Security desde el inicio.
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Los usuarios autenticados no reciben permisos de
-- lectura o modificación hasta definir las políticas.


-- Cada usuario activo puede consultar su propio perfil.
CREATE POLICY "profiles_select_own"
ON public.profiles
FOR SELECT
TO authenticated
USING (
    id = (SELECT auth.uid())
    AND is_active = TRUE
);



-- Verificar si el usuario autenticado es la profesora activa.
CREATE FUNCTION public.is_profesora()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM public.profiles
        WHERE id = (SELECT auth.uid())
          AND role = 'PROFESORA'
          AND is_active = TRUE
    );
$$;

-- Restringir la ejecución a usuarios autenticados.
REVOKE ALL ON FUNCTION public.is_profesora() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.is_profesora() FROM anon;
GRANT EXECUTE ON FUNCTION public.is_profesora() TO authenticated;


-- La profesora activa puede consultar todos los perfiles.
CREATE POLICY "profiles_select_profesora"
ON public.profiles
FOR SELECT
TO authenticated
USING (
    (SELECT public.is_profesora())
);
