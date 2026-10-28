
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function requireProfesora() {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/login");
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("id, first_name, last_name, role, is_active")
    .eq("id", user.id)
    .single();

  if (
    profileError ||
    !profile ||
    !profile.is_active ||
    profile.role !== "PROFESORA"
  ) {
    redirect("/acceso-denegado");
  }

  return { user, profile };
}
