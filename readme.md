Given an amount of seconds, convert to String format acording to the amount of hours/minutes/seconds, consider bellow values:

1.  1 hour and 20 minutes => 1h20m
2.  20 minutes and 3 seconds => 20m3s
3.  5 seconds => 5s
    Example 1:
    x = 7362;
    output = 2h1m (The minutes should 0.045.., therfore in order to avoid many decimal just round to the next/higher integer)
    Example 2:
    x = 100;
    output = 1m40s
    Example 3:
    x = 5;
    output = 5s
    Note: In case of hours, minutes have to be rounded to the higher integer, in case of minutes, it have to be rounded to the lowest integer
