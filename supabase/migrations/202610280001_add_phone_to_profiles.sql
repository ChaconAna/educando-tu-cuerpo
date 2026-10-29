-- Agregar teléfono opcional a los perfiles de usuarios.
ALTER TABLE public.profiles
    ADD COLUMN phone TEXT;
