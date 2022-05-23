import {FooterProps} from './Footer.props';
import styles from './Footer_nav.module.scss';
import classnames from 'classnames';

export const Footer_nav = (props: FooterProps) => {
    return(
        <div>
            <a href=''
            className={classnames(styles.footer_nav)}
                >
                    {props.text}
                </a>
        </div>
    );
}