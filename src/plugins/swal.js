import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const swal = (text) => {
    MySwal.fire({
        text,
        toast: true,
        showConfirmButton: false,
        position: 'top',
        timer: 3000,
        timerProgressBar: true,
        background: 'rgb(149 150 216 / 33%)',
        color: 'white',
    })
}

export default swal
