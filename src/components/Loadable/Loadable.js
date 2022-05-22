import classes from "./Loadable.module.css";
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {useOnScreen} from "../../hooks/useOnScreen";

const Loadable = ({src}) => {
    const [isLoaded, setIsLoaded] = useState(false)

    const containerRef = useRef(null)
    const imageRef = useRef(null)

    const isIntersecting = useOnScreen(containerRef)

    useEffect(() => {
        if(!isIntersecting || isLoaded) return
        if(imageRef.current) {
            imageRef.current.onload = () => setIsLoaded(true)
        }
    }, [isIntersecting, isLoaded])

    return (
        <div ref={containerRef} className={classNames(classes.container, {
            [classes.container_loaded]: isLoaded
        })}>
            {
                (isIntersecting || isLoaded) && <img
                    className={classNames(classes.cat, {
                        [classes.cat_loaded]: isLoaded
                    })}
                    src={src}
                    alt="#"
                    ref={imageRef}
                />
            }
        </div>
    )
}

export default Loadable
