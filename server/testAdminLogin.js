
const testAdminLogin = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "vinaydugyala630@gmail.com",
        password: "vinayakshaya143",
      }),
    });

    const data = await response.json();

    console.log("Status:", response.status);
    console.log("Response:", data.message);
    console.log("Token received:", Boolean(data.token));
  } catch (error) {
    console.log("Error:", error.message);
  }
};

testAdminLogin();
