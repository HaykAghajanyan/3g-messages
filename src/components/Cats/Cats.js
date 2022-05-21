import {IMAGES} from "../../helpers/constants";
import classes from "./Cats.module.css";
import Loadable from "../Loadable/Loadable";

const Cats = () => {
    return (
        <div className={classes.container}>
            {
                IMAGES.map(cat => (
                    <div key={cat} className={classes.item}>
                        <Loadable src={cat} />
                    </div>

                ))
            }
        </div>
    )
}

export default Cats
