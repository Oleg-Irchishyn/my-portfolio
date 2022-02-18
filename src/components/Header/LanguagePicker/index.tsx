import React from 'react'
import cn from 'classnames';
import styles from './../../../styles/components/Header.module.scss';
import { useDispatch } from 'react-redux'
//@ts-ignore
import { IntlActions } from 'react-redux-multilingual'
const LanguagePicker: React.FC<ownProps> = React.memo(({activeLang, setActiveLanguage}) => {
    
    const  languages  = [{
        title: 'Eng',
        dataTitle: 'en'
    },
    {
        title: 'Ukr',
        dataTitle: 'uk'
    },
    {
        title: 'Rus',
        dataTitle: 'ru'
    }]

    const dispatch = useDispatch()

    const changeLang =  (lang:string) => {
            dispatch(IntlActions.setLocale(lang))
            setActiveLanguage(lang)
        };
      
 
  return (
    <ul className={cn(styles.languagepicker)}>
        {languages.map((language, index) => {
            const {title, dataTitle} = language;
          return <li key={`${title}_${index}`} 
                  className={cn({[styles.active]: activeLang === dataTitle})} 
            onClick={ () => changeLang(dataTitle)}>{title}</li>
        })}
    </ul>
  )
})

type ownProps = {
    setActiveLanguage: (lang: string) => void
    activeLang: string
}

export default LanguagePicker