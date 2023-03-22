function findAnagram(word1,word2)
{
    wordMap1={};
    wordMap2={};
    if(word1.length!==word2.length)
    {
        return false
    }
    for(var ele of word1)
    {
        wordMap1[ele]=(wordMap1[ele]||0) +1;
    }
    for(var ele of word2)
    {
        wordMap2[ele]=(wordMap2[ele]||0) +1;
    }
    // for(var ele of word2)
    // {
    //     wordMap2[ele]=(wordMap2[ele]||0) +1;
    // }
    console.log(wordMap1)
    for(var ele of word1)
    {
        console.log(ele)
        console.log(wordMap1[ele])
        if(wordMap1[ele]!==wordMap2[ele])
        {
            return false;
        }
    }
    console.log(wordMap1)
    return true;

}

console.log(findAnagram("tgzonrrftzq","tqzzrtnrftg"))

//cat,atc