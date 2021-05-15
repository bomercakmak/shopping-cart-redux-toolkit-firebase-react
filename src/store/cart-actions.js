import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
export const fetchCartData = () => {
  return (dispatch) => {
    fetch(
      "https://cart-redux-react-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(cartActions.replaceCart({
            items:data.items || [],
            totalQuantity:data.totalQuantity
        }));
      })
      .catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error...",
            message: "Fetching cart data failed!",
          })
        );
      });
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://cart-redux-react-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
