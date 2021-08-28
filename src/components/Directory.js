import React, { Component } from 'react'
import MenuItem from './MenuItem';
import "../styles/Directory.scss"

class Directory extends Component {
    state = {
        sections: [
            {
                title: 'hats',
                imageUrl: '',
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'jackets',
                imageUrl: '',
                id: 2,
                linkUrl: ''
            },
            {
                title: 'sneakers',
                imageUrl: '',
                id: 3,
                linkUrl: ''
            },
            {
                title: 'womens',
                imageUrl: '',
                size: 'large',
                id: 4,
                linkUrl: ''
            },
            {
                title: 'mens',
                imageUrl: '',
                size: 'large',
                id: 5,
                linkUrl: ''
            }
        ]
    }
    render() {
        
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id, ...otherSectionProps})=>(
                    <MenuItem  key={id} {...otherSectionProps}/>
                ))}
            </div>
        )
    }
}

export default Directory;