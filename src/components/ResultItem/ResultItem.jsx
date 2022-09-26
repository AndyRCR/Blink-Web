import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"
import React, { useContext } from 'react'
import { Checkbox } from '@mui/material'
import { useState } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import Swal from 'sweetalert2'
import './ResultItem.css'

const ResultItem = ({ res, i, pos }) => {

    const { itemCheckeds, setItemCheckeds } = useContext(GlobalContext)

    const [checked, setChecked] = useState(false)

    const handlePosition = () =>{
        const item = document.querySelector(`.resultsCarousel .result${i + 1}`)
        item.style.left = `${220 * pos + 16 * pos}px`
    }

    const handleCheck = (e) => {
        const { checked } = e.target
        if (!checked){
            setItemCheckeds(itemCheckeds - 1)
            setChecked(checked)
            handlePosition()
        }
        else {
            if (itemCheckeds < 3) {
                setItemCheckeds(checked ? itemCheckeds + 1 : itemCheckeds - 1)
                setChecked(checked)
                handlePosition()
            } else {
                Swal.fire(
                    '',
                    'Puede fijar máximo 3 resultados',
                    'info'
                )
            }
        }
    }

    // useEffect(() => {
    // }, [pos])

    return (
        <>
            <div
                className={
                    checked
                        ? `result result${i + 1} background${(i % 2) + 1} pinned`
                        : `result result${i + 1} background${(i % 2) + 1}`}>
                <div className='check'>
                    <p>Fijar</p>
                    <Checkbox
                        checked={checked}
                        onChange={handleCheck} />
                </div>
                <div className='header'>
                    <img src={res.logo} alt="prepaga logo blink" />
                </div>
                <div className='info'>
                    <h4>{res.plan}</h4>
                    <h2>{res.price}</h2>
                    <p>{res.discount !== null ? res.discount : '-'}</p>
                </div>
                <div className='benefits'>
                    <div className="benefitItem">
                        {typeof res.reintegros === 'boolean'
                            ? <FontAwesomeIcon icon={res.reintegros ? faCheck : faXmark} />
                            : res.reintegros}
                    </div>
                    <div className="benefitItem">
                        {typeof res.internacion === 'boolean'
                            ? <FontAwesomeIcon icon={res.internacion ? faCheck : faXmark} />
                            : res.internacion}
                    </div>
                    <div className="benefitItem">
                        {typeof res.medico === 'boolean'
                            ? <FontAwesomeIcon icon={res.medico ? faCheck : faXmark} />
                            : res.medico}
                    </div>
                    <div className="benefitItem">
                        {typeof res.guardia === 'boolean'
                            ? <FontAwesomeIcon icon={res.guardia ? faCheck : faXmark} />
                            : res.guardia}
                    </div>
                    <div className="benefitItem">
                        {typeof res.consultas === 'boolean'
                            ? <FontAwesomeIcon icon={res.consultas ? faCheck : faXmark} />
                            : res.consultas}
                    </div>
                    <div className="benefitItem">
                        {typeof res.laboratorio === 'boolean'
                            ? <FontAwesomeIcon icon={res.laboratorio ? faCheck : faXmark} />
                            : res.laboratorio}
                    </div>
                    <div className="benefitItem">
                        {typeof res.diagnostico === 'boolean'
                            ? <FontAwesomeIcon icon={res.diagnostico ? faCheck : faXmark} />
                            : res.diagnostico}
                    </div>
                    <div className="benefitItem">
                        {typeof res.farmacias === 'boolean'
                            ? <FontAwesomeIcon icon={res.farmacias ? faCheck : faXmark} />
                            : res.farmacias}
                    </div>
                    <div className="benefitItem">
                        {typeof res.odontologia === 'boolean'
                            ? <FontAwesomeIcon icon={res.odontologia ? faCheck : faXmark} />
                            : res.odontologia}
                    </div>
                    <div className="benefitItem">
                        {typeof res.ortodoncia === 'boolean'
                            ? <FontAwesomeIcon icon={res.ortodoncia ? faCheck : faXmark} />
                            : res.ortodoncia}
                    </div>
                    <div className="benefitItem">
                        {typeof res.implantes === 'boolean'
                            ? <FontAwesomeIcon icon={res.implantes ? faCheck : faXmark} />
                            : res.implantes}
                    </div>
                    <div className="benefitItem">
                        {typeof res.oftalmologia === 'boolean'
                            ? <FontAwesomeIcon icon={res.oftalmologia ? faCheck : faXmark} />
                            : res.oftalmologia}
                    </div>
                    <div className="benefitItem">
                        {typeof res.optica === 'boolean'
                            ? <FontAwesomeIcon icon={res.optica ? faCheck : faXmark} />
                            : res.optica}
                    </div>
                    <div className="benefitItem">
                        {typeof res.mental === 'boolean'
                            ? <FontAwesomeIcon icon={res.mental ? faCheck : faXmark} />
                            : res.mental}
                    </div>
                    <div className="benefitItem">
                        {typeof res.kinesiologia === 'boolean'
                            ? <FontAwesomeIcon icon={res.kinesiologia ? faCheck : faXmark} />
                            : res.kinesiologia}
                    </div>
                    <div className="benefitItem">
                        {typeof res.maternidad === 'boolean'
                            ? <FontAwesomeIcon icon={res.maternidad ? faCheck : faXmark} />
                            : res.maternidad}
                    </div>
                    <div className="benefitItem">
                        {typeof res.cirugia === 'boolean'
                            ? <FontAwesomeIcon icon={res.cirugia ? faCheck : faXmark} />
                            : res.cirugia}
                    </div>
                    <div className="benefitItem">
                        {typeof res.cobertura === 'boolean'
                            ? <FontAwesomeIcon icon={res.cobertura ? faCheck : faXmark} />
                            : res.cobertura}
                    </div>
                </div>
            </div>
            <div className='pinBackground'>
                <div className={checked ? 'pinFix visible' : 'pinFix'}>
                    P<br/>l<br/>a<br/>n<br/><br/>
                    f<br/>i<br/>j<br/>a<br/>d<br/>o
                </div>
            </div>
        </>
    )
}

export default ResultItem