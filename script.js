
import  {createRoot}  from "react-dom/client";

import SubmitForm from "./Components/form";

  // React Component

  const App = () => 
  (
    <div>
        <SubmitForm/>
    </div>
  )
  

  const root = createRoot(document.getElementById("root"));
  root.render(<App/>);
  
  
