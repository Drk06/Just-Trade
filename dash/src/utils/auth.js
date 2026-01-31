
export async function isAuthenticated() {
  try {
    const res = await fetch("/api/me", {
      credentials: "include",
    });
    return res.ok;
  } catch {
    return false;
  }
}
