import './page.scss'

function HeightHalfWidth () {
	return (
		<div className='outer_wrapper'>
			<div className='inner_wrapper'>
				<div className='box'>height = width / 2</div>
			</div>
		</div>
	)
}

function DivTextArea () {
	return (
		<div className='div-textarea' contentEditable='true'></div>
	)
}

export default function Page1 () {
	return (
		<div className='parent'>
			<div className='height-half-width-container'>
				<HeightHalfWidth></HeightHalfWidth>
			</div>
			<h3>div textarea</h3>
			<DivTextArea></DivTextArea>
		</div>
	)
}