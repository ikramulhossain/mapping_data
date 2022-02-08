const tododes="Calling Family";
const tododesc="Sed erat duo justo sea lorem sit invidunt et consetetur, dolores dolores vero invidunt vero sed diam tempor dolore, eos."
const date= new Date();
const currentday=date.getDate();
const currentyear=date.getFullYear();
const currentmont=date.getMonth();

function Card(props){
  const {TodoTittel,tododesc}=props;
  return <div className='Card'>
  <div className='CardTittle'>
  <marquee>{TodoTittel}</marquee>
  </div>

<p className='CardDes'>{tododesc}</p>
<p className='CardFooder'>{currentday +" /" + currentmont + " / " +currentyear}</p>
</div>
}

export default Card;