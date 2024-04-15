
# RiffTheory (Backend)

[Interface for this API](https://riff-theory.vercel.app/)
Composing this backend's database data was fairly simple- this [wiki](https://en.wikipedia.org/wiki/Scale_(music)) was scrapped and using Python, Pandas, [pychord](https://pypi.org/project/pychord/) and [mingus](https://pypi.org/project/mingus/), functions were created that would organize and expand upon the resources present. With that being said, please use this API while keeping in mind the fact that I am a [struggling developer](https://growgratitude.com/wp-content/uploads/2013/04/mp9004277401.jpg?w=100). Hosting this backend cost only a measely $10, but misuse and repeated API calls using webscrappers could potentially drive up that price. Please be considerate! 

## API /api/scales
#### GET /tonic/:tonic
Returns all scales found for a tonic root note.

```http://rifftheorybackend.onrender.com/api/scales/tonic/A```

#### GET /name/:name
Returns unique scale where name matches params. 

```http://rifftheorybackend.onrender.com/api/scales/name/A%20Lydian%20dominant%20scale```

#### GET /typeandtonic/:type/:tonic
Returns scales by type with a root tonic note.

```https://rifftheorybackend.onrender.com/api/scales/typeandtonic/major/G%23```

```https://rifftheorybackend.onrender.com/api/scales/typeandtonic/minor/B```

#### GET /filterbynotes/:notes

Returns possible scale matches based on notes given (put in order starting from desired tonic for best results).

```https://rifftheorybackend.onrender.com/api/scales/filterbynotes/A%20B%20C%20D%20E%20F%20G```

```
https://rifftheorybackend.onrender.com/api/scales/filterbynotes/G A B
```