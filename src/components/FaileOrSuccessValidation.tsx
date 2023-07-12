import classes from '../css-modules/FaileOrSuccess.module.css'
import global from '../css-modules/Global.module.css'

import BackButton from './BackButton'

interface FailedOrSuccessProps {
  message: string
}

function FaileOrSuccessValidation({ message }: FailedOrSuccessProps) {
  return (
    <div>
      <div className={classes.faileOrSuccessContainer}>
        <BackButton to="/main"/>
        <div className={classes.faileOrSuccessContent}>
          <p
          className={classes.faileOrSuccessMessage}
          >{ message }</p>
        </div>
      </div>
    </div>
  )
}

export default FaileOrSuccessValidation