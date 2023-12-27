import {UserInputItem, UserEnteredDetails} from './styledComponents'

const UserInput = props => {
  const {userInputDetails} = props
  const {userEnteredText, countOfChars} = userInputDetails

  return (
    <UserInputItem>
      <UserEnteredDetails>
        {userEnteredText} : {countOfChars}
      </UserEnteredDetails>
    </UserInputItem>
  )
}

export default UserInput
