import slugify from 'slugify'

const slug=(name)=>{
  return slugify(name,{ lower: true }).replace(/[^\w\-]+\g/,'')
}

export default slug