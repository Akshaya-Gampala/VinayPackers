const testEnquiry = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/enquiries",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: "Test Customer",
          phone: "9876543210",
          email: "test@example.com",
          service: "House Shifting",
          pickupLocation: "Hanumakonda",
          dropLocation: "Hyderabad",
          message: "Testing Vinay Packers website"
        })
      }
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
};

testEnquiry();