import { ReactNode } from 'react';
import styles from './Loading.module.scss';

interface LoadingProps {
  icon?: ReactNode;
  label?: string;
}

export const Loading = (props: LoadingProps): JSX.Element => {
  const { icon, label } = props;
  return (
    <div className={styles.loading}>
      {icon && icon}
      <span>{label ?? 'Loading...'}</span>
    </div>
  );
};
