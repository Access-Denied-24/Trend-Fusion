// import ReactLoading from 'react-loading';
// import styles from './loading.module.css';

// export default function Loading(){
//   return (
//     <div className="loading">
//       {/* <h1>Page Loading...</h1> */}
//       <ReactLoading className={styles.loader} type='bars' color="#007bff" height={100} width={100} />

//     </div>
//   );
// }

import ReactLoading from 'react-loading';
import styles from './loading.module.css'; // Adjust the path as necessary

const YourComponent = () => {
  return (
    <div className={styles.loaderContainer}>
      <img 
        src="../../public/Flowing_gradient.gif" alt="Loading..."
        className={styles.loader} style={{ height: '100px', width: '100px' }}
      />
    </div>
  );
};

export default YourComponent;
