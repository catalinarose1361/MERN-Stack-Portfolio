// import React from 'react';

// import {  Button, Collapse, Card, Carousel, List, Col, Row } from 'antd';

// import { CaretRightOutlined, GithubOutlined, DesktopOutlined } from '@ant-design/icons';

// const { Meta } = Card;

// const { Panel } = Collapse;

// function Projects(props) {

//   function onChange(a, b, c) {

//     console.log(a, b, c);

//   }

//   return (
    
//     <Card 

//       hoverable
//       style={{textAlign: "center", marginBottom: '50px'}}
//       cover={

//         <Carousel effect="fade" autoplay dotPosition={'top'} afterChange={onChange}>
   
//            <img alt={'project screenshots'} width={700} src={props.image} />
   
//         </Carousel>

//       }

//     >

//       <Row >

//         <Col span={24}>

//           <Meta style={{textColor: 'white'}} title={props.title}  />

//         </Col>
          
//       </Row>

//       <Row>

//         <Col span={12}>

//           <Button style={{borderStyle: 'none'}} href={props.github} icon={<GithubOutlined twoToneColor={ '#000000'} style={{ fontSize: '32px' }} />}  shape="square"  size='large'>
//           </Button>

//         </Col>
    
//         <Col span={12}>

//           <Button style={{borderStyle: 'none'}} href={props.heroku} icon={<DesktopOutlined style={{ fontSize: '32px' }} />}  shape="square"  size='large'>
//           </Button>

//         </Col>

//       </Row> 

//        {/* DROP DOWN MENUS */}
//       <Collapse 

//         style={{textAlign: "left"}} 
//          bordered={false}  
//          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} 
//         className="site-collapse-custom-collapse" 

//        >

//         <Panel style={{backgroundColor: '#ffffff', borderStyle: 'none'}} header="Description" key={props.key}>
//             <p>
//             {props.description}  
//             </p>
            
          

//         </Panel>

//         <Panel style={{backgroundColor: '#ffffff', borderStyle: 'none'}} header="Technologies Used" key={props.key}>

//           <List
    
            
//             dataSource={props.technologies} 
//             renderItem={item => ( 

//                <List.Item> 
// {item} 
           

//                </List.Item> 

//              )} 

//            /> 
      
//          </Panel> 

//        </Collapse> 
      
//     </Card> 
       
//   );
// }

// export default Projects;