const vehicleForm =
    document.getElementById("vehicleForm");


vehicleForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const vehicleNumber =
        document.getElementById("vehicleNumber").value.trim();

    const ownerName =
        document.getElementById("ownerName").value.trim();


    if (vehicleNumber === "" || ownerName === "") {

        alert("Please enter Vehicle Number and Owner Name.");

        return;

    }


    // Save vehicle information temporarily

    localStorage.setItem(
        "vehicleNumber",
        vehicleNumber
    );

    localStorage.setItem(
        "ownerName",
        ownerName
    );


    localStorage.setItem(
        "vehicleType",
        document.getElementById("vehicleType").value
    );

    localStorage.setItem(
        "fuelType",
        document.getElementById("fuelType").value
    );

    localStorage.setItem(
        "manufacturer",
        document.getElementById("manufacturer").value
    );

    localStorage.setItem(
        "model",
        document.getElementById("model").value
    );

    localStorage.setItem(
        "year",
        document.getElementById("year").value
    );

    localStorage.setItem(
        "odometer",
        document.getElementById("odometer").value
    );


    alert("Vehicle information saved successfully!");
    window.location.href = "inspection-checklist.html";
});