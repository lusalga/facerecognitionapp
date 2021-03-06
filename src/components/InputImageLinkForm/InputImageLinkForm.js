import React from 'react';
import './InputImageLinkForm.css'


const InputImageLinkForm = ( {onInputChange, onButtonClick} ) => {
	return (
		<div>
			<p className='f3 pt4'>
				{'This Super Brain will detect faces in your pictures. Try it!'}
			</p>
			<div className='centerFlex'>
				<div className='pattern centerFlex pa4 br3 shadow-3 mw ' >
					<input 
						className='w-70 pa2 f4 tc' 
						type='text' 
						placeholder='insert image link' 
						onChange ={onInputChange}
					/>
					<button 
						className='ml1 pointer br2 w-30 grow f4 link ph3 pv2 dib gold'
						onClick={onButtonClick}
					>
						<span className="db w-100">Detect</span> 
					</button>
				</div>
			</div>
		</div>
	);  
};

export default InputImageLinkForm;