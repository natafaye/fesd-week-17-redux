

const userSlice = createSlice({
    name: "users",
    initialState: {
        orderList: ORDERS
    },
    reducers: {
        createOrder: (state, action) => {
            // code to create
        },
        deleteOrder: (state, action) => {
            // code to delete
        }
    }
})


//   const createOrder = (orderData) => {
//     setOrderList(orderList.concat({ 
//       ...orderData,
//       id: orderList[orderList.length - 1].id + 1 
//     }))
//   }

//   const deleteOrder = (orderId) => {
//     setOrderList(orderList.filter(order => order.id !== orderId))
//   }