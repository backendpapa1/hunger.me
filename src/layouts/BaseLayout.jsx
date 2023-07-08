import {Navigation} from "../components/layouts/navigation/Navigation.jsx";


export const BaseLayout = ({children}) => {

    return (
        <div >
            <Navigation />
            <div>
                {children}
            </div>
        </div>
    )
}
