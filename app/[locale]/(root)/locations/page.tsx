import { useTranslations } from 'next-intl'

const Locations = () => {
  const t = useTranslations('Location')
  return (
    <>
      {t('name')}
    </>
    
  );
}

export default Locations