import Link from "next/link"

export default function IconLink({link, icon : IconComponent, classes = ''} : {
    link: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
    classes?: string
}) {
    return <Link className='hover:cursor-pointer' href={link}><IconComponent className={`h-m w-m ${classes}`}/></Link>
}