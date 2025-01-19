import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './css/footer.css'


const countriesAPI = 'https://api.oneflaretech.com/api/settings/country'

const Country = ({ className }) => {
    const [countries, setCountries] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchCountries = async () => {
            setLoading(true)
            try {
                const response = await fetch(countriesAPI)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json()
                console.log('API response of data', data);
                setCountries(data.data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchCountries()
    }, [])
    return (
        <div className={`footer-container ${className || ''}`}>
            <div className="country">
                <label htmlFor="country">Country and Region</label>
                <br />
                <select id="country">
                    <option value="" disabled>Select country</option>
                    {loading && <option>Loading...</option>}
                    {error && <option>Error: {error}</option>}
                    {!loading && !error && countries.map((country, index) => (
                        <option key={index} value={country.name}>{country.name} ({country.curreny})</option>
                    ))}
                </select>
            </div>

        </div>
    )
}

Country.propTypes = {
    className: PropTypes.string
}

export default Country