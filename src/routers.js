
import { createBrowserRouter } from "react-router-dom";
import Shop from "./Shop";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";
import ProductDetails from "./pages/ProductDetailPage/ProductDetails";
import { LoadProductById } from "./routes/product";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <ShopApplicationWrapper />,
      children:[
      {
        path: "/",
        element: <Shop />
      },
      
      {
        path: "/women",
        element: <ProductListPage CategoryType={'WOMEN'}/>
      },
      
      {
        path: "/men",
        element: <ProductListPage CategoryType={'MEN'}/>
      },{
        path: "/product/:productId",
        loader: LoadProductById,
        element: <ProductDetails/>

      }
      ]
    }
    
  ]);