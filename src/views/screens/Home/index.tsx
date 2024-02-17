import { useState } from 'react';
import { Accordion, Alert, Badge, Breadcrumb, Collapse, Container } from '../../../core/components';
import { ToggleParamsAccordion } from '../../../core/components/interfaces';
import { Button, ButtonGroup } from '../../../core/components/Button';

export const Home = () => {
  const [isOpenCollapse, setIsOpenCollapse] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number[]>([]);

  const handleToggle = ({ isOpen, key }: ToggleParamsAccordion) => {
    if (isOpen) {
      openAccordion.push(key);
    } else {
      const index = openAccordion.findIndex(item => item === key)
      delete openAccordion[index];
    }
    setOpenAccordion([...openAccordion])
  }
  return (
    <Container>
      <Accordion
        open={openAccordion}
        onToggle={handleToggle}
        items={[
          {
            header: 'Item 1',
            content: 'This is the first item\'s accordion body.',
          },
          {
            header: 'Item 2',
            content: 'This is the second item\'s accordion body.'
          },
          {
            header: 'Item 3',
            content: 'This is the third item\'s accordion body.'
          }
        ]}
      />
      <Alert color='primary'>A simple light alert—check it out!</Alert>
      <Alert color='secondary'>A simple light alert—check it out!</Alert>
      <Alert color='success' isDismissible>A simple light alert—check it out!</Alert>
      <Alert color='warning'>A simple light alert—check it out!</Alert>
      <Alert color='info'>A simple light alert—check it out!</Alert>
      <Alert color='danger'>A simple light alert—check it out!</Alert>
      <Alert color='dark'>A simple light alert—check it out!</Alert>
      <Alert color='light'>A simple light alert—check it out!</Alert>
      <Alert color='dark' isDismissible>A simple light alert—check it out!</Alert>
      <div className="my-1">
        <Badge color='primary' isRounded>primary</Badge>
        <Badge color='secondary' isRounded>secondary</Badge>
        <Badge color='success'>success</Badge>
        <Badge color='warning'>warning</Badge>
        <Badge color='info'>info</Badge>
        <Badge color='danger'>danger</Badge>
      </div>
      <div className="my-1">
        <Breadcrumb
          items={[
            { label: <a href='#home'>Home</a> },
            { label: <a href='#libary'>Libary</a> },
            { label: "Data", isActive: true },
          ]}
        />
      </div>
      <div className="d-flex gap-2">
        <div><Button color='primary' >primary</Button></div>
        <div><Button color='secondary' >secondary</Button></div>
        <div><Button color='success' >success</Button></div>
        <div><Button color='warning' >warning</Button></div>
        <div><Button color='info' >info</Button></div>
        <div><Button color='danger' >danger</Button></div>
        <div><Button color='primary' isOutline>primary</Button></div>
        <div><Button color='secondary' isOutline>secondary</Button></div>
        <div><Button color='success' isOutline>success</Button></div>
        <div><Button color='warning' isOutline>warning</Button></div>
        <div><Button color='info' isOutline>info</Button></div>
        <div><Button color='danger' isOutline>danger</Button></div>
        <div><Button color='primary' isOutline size='sm'>primary</Button></div>
        <div><Button color='primary' isOutline size='lg'>primary</Button></div>
      </div>
      <div className="my-2 d-flex gap-2">
        <ButtonGroup>
          <Button color='primary'>Left</Button>
          <Button color='primary'>Middle</Button>
          <Button color='primary'>Right</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button isOutline color='primary'>Left</Button>
          <Button isOutline color='primary'>Middle</Button>
          <Button isOutline color='primary'>Right</Button>
        </ButtonGroup>
      </div>
      <Collapse isOpen={isOpenCollapse} >
        <div className="card" style={{ width: 300 }}>
          <div className="card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </Collapse>
      <button onClick={() => { setIsOpenCollapse(!isOpenCollapse) }}>Click</button>
    </Container>
  )
}
export default Home