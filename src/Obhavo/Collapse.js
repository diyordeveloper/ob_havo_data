import React, { useState } from 'react';
import { Collapse,  CardBody, Card } from 'reactstrap';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="df">
      <div className="yozuv"  onClick={toggle} style={{ marginBottom: '1rem' }}>
          <h3>Menu</h3>
          <ArrowDropDownIcon />
      </div>
      <Collapse isOpen={isOpen}>
        <Card style={{border:'none'}}>
          <CardBody>
          Assalomu alaykum! Siz bu yerda Ob-havo ma'lumotlarini bilib olishingiz mumkin.
          Ob-havo ma'lumotlarini bilish uchun qidiruv joyiga tegishli nomni yozsangiz sizga Ob-havo ma'lumotlarini chiqarib beradi...
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Example;