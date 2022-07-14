#include<bits/stdc++.h>
#define ll long long
using namespace std;
int main()
{
    int n;
    cin >> n;
    int chan[n] , le[n];
    int c= 0 , l =0;
    for(int i= 0;i<n ;i++)
    {
        int x;
        cin >> x;
        if(x %2 ==0)
        chan[c++] =x;
        else le[l++] =x;
    }
    sort(chan , chan+c);
    sort(le ,le+l);
    for(int i =0 ;i<c;i++)
    cout << chan[i] << " ";
    for(int i=0 ;i <l;i++)
    cout << le[i] << " ";
    return 0;
}