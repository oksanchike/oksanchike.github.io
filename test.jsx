import styles from "test.scss";
import {Component} from "react";

class Test extends Component {
    render() {
        return (
            <div className={styles.wrapper}>It's react</div>
        );
    }
}

export default Test;