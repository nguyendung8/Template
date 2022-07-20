#include<iostream>
#include<algorithm>
using namespace std;

void nhapmang(int a[][10] ,int m, int n)
{
    for(int i=0;i<m;i++)
       for(int j=0;j<n;j++)
   {
       cin >> a[i][j];
   }
}
int main()
{
    int i,j,n,m,a[10][10]; // n hang  , m cot
     cin >> n >> m;
     nhapmang(a, n ,m);
   sort(a,a+n,a+m);
	for(int i=0 ;i<n ;i++)
	{
		for(int j=0;j<m;j++)
		{
			cout << a[i][j] << " ";
		}
		cout << endl;
	}
    return 0;
}
