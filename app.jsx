Function App() {
    const myCar = new Car("Toyota", "Corolla", 2020);
    






    return {
        <div>
        {/* <h2>Car Details</h2>
            <p>{myCar.info()}</p>
            <p>{myHybridCarPrius.info()}</p>
            <p>{myHybridCarVolt.info()}</p> */}
            <h2>Fruits List</h2>
            <FruitList />

            <StudentList />

            <h2>Cart Items</h2>
            <CartItemList />
            <UserProfile name="XYZ Resource" role="Project Manager" project="Project Alpha" />
        </div>
    };
}