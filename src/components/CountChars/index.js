import {Component} from 'react'
import {v4} from 'uuid'
import UserInput from '../UserInput'

import {
  BgContainer,
  LeftPart,
  InfoCardContainer,
  Info,
  UserInputsList,
  RightPart,
  CounterHeading,
  AddInputContainer,
  Input,
  AddInputButton,
  EmptyImage,
} from './styledComponents'

class CountChars extends Component {
  state = {
    userInput: '',
    charCountsList: [],
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickAddbtn = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredText: userInput,
      countOfChars: userInput.length,
    }
    this.setState(prevState => ({
      charCountsList: [...prevState.charCountsList, newUserInput],
      userInput: '',
    }))
  }

  renderUserInputs = () => {
    const {charCountsList} = this.state
    return charCountsList.length === 0 ? (
      <EmptyImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      charCountsList.map(eachItem => (
        <UserInput key={eachItem.id} userInputDetails={eachItem} />
      ))
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <BgContainer>
        <LeftPart>
          <InfoCardContainer>
            <Info>
              Count the characters like a Boss
            </Info>
          </InfoCardContainer>
          <UserInputsList>{this.renderUserInputs()}</UserInputsList>
        </LeftPart>
        <RightPart>
          <CounterHeading>Character Counter</CounterHeading>
          <AddInputContainer onSubmit={this.onClickAddbtn}>
            <Input
              type="text"
              value={userInput}
              onChange={this.onChangeUserInput}
              placeholder="Enter the characters here"
            />
            <AddInputButton>Add</AddInputButton>
          </AddInputContainer>
        </RightPart>
      </BgContainer>
    )
  }
}

export default CountChars
