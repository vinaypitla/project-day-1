import { useState } from "react";
import NavBar from "./NavBar";
import CarSlider from "../assets/Ecomponents/CarSlider";


export default function HomePage() {
    
    const vehicles = [
        { name: "Tesla Model S", type: "Electric", price: "$89,990" },
        { name: "Ford Mustang", type: "Sports", price: "$55,300" },
        { name: "Toyota Camry", type: "Sedan", price: "$25,295" }
    ];
    
    const [search, setSearch] = useState("");

    const filteredVehicles = vehicles.filter(vehicle => 
        vehicle.name.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
        <><NavBar />
        <div>
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                <header style={{ textAlign: "center", marginBottom: "20px" }}>
                    <h1>Welcome to Our Showroom</h1>
                    <p>Find the perfect vehicle for you</p>
                    <CarSlider />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by make, model, year, or price..." />
                </header>
                <section style={{ textAlign: "center", marginBottom: "20px" }}>
                    <h2>Featured Vehicles & Promotions</h2>
                    <p>Check out our latest deals and special offers!</p>
                </section>
                <section style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                    {filteredVehicles.map((vehicle, index) => (
                        <div key={index} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", width: "200px", textAlign: "center" }}>
                            <h2>{vehicle.name}</h2>
                            <p>Type: {vehicle.type}</p>
                            <p>Price: {vehicle.price}</p>
                        </div>
                    ))}
                </section>
                <section style={{ textAlign: "center", marginTop: "20px" }}>
                    <h2>Vehicle Categories</h2>
                    <p>Browse by category: Sedans, SUVs, Electric Vehicles</p>
                </section>
                <section style={{ textAlign: "center", marginTop: "20px" }}>
                    <h2>Call-to-Action</h2>
                    <p>Ready to find your dream car? Explore now!</p>
                    <button style={{ marginRight: "10px", padding: "10px 20px", fontSize: "16px" }}>Browse Cars</button>
                    <button style={{ padding: "10px 20px", fontSize: "16px" }}>Request Test Drive</button>
                </section>
            </div>
        </div></>
    )
}
