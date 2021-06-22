import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

const loader = () => {
    return (
      <Loader
        className={styles.Loader}
        type="Oval"
        color="#CB2400"
        height={100}
        width={100}
        timeout={2000}
      />
    );
  };
  export default loader;