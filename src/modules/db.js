export function insertOrder(payload) {
  console.log("order");
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyY2NvdXp2dWVlYnBhbWt3d2V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTkxNzgsImV4cCI6MTk4MjE3NTE3OH0.lFgbdYvYRQB4MOdqun-oI_-pLjE1u6qOerF4Q-erxd4";
  const url = "https://lrccouzvueebpamkwweu.supabase.co";
  fetch(url + "/rest/v1/simpleshop", {
    method: "POST",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyY2NvdXp2dWVlYnBhbWt3d2V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTkxNzgsImV4cCI6MTk4MjE3NTE3OH0.lFgbdYvYRQB4MOdqun-oI_-pLjE1u6qOerF4Q-erxd4",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyY2NvdXp2dWVlYnBhbWt3d2V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTkxNzgsImV4cCI6MTk4MjE3NTE3OH0.lFgbdYvYRQB4MOdqun-oI_-pLjE1u6qOerF4Q-erxd4",
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  })
    .then()
    .then();
}
