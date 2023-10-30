import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const toastSucces = () => toast.success("We will contact you shortly !",{
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});

export {ToastContainer, toastSucces}