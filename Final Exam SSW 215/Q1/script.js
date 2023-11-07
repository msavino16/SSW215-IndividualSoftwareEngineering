function num_type()
{
    let n = document.getElementById("entry").value

    if (n%2==0)
    {
        document.getElementById("EvenOrOdd").innerHTML = n + " is even"
    }
    else
    {
        document.getElementById("EvenOrOdd").innerHTML = n + " is odd"
    }
    
}