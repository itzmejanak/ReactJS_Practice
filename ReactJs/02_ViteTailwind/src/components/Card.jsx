import React from 'react'

function Card(Props) {
  console.log(Props.userName);
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 w-72">
    <img className="w-24 h-24 rounded-full mx-auto" src="https://janakdevkota.com.np/images/hero1.png" alt="" width="384" height="512"/>
    <div className="pt-6 space-y-4">
      <blockquote>
        <p className="text-lg font-mediu">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption>
        <div>
          {Props.userName}
        </div>
        <div>
          Staff Engineer, Algolia
        </div>
      </figcaption>
    </div>
  </figure>
  )
}

export default Card