import images from '../../assets/images'

const Flag = ({ lang }) => {
    return <img className="h-6 w-6" src={images[lang]} alt={lang} />
}

export default Flag
