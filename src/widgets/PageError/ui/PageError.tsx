import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {className?: string;}
export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const handleReloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError)}>
            <p>{t('Unxpected error happened')}</p>
            <Button onClick={handleReloadPage}>{t('Reload page')}</Button>
        </div>
    );
};
