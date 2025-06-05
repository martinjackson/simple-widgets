# Diff between main and master branches

```bash
git diff origin/main...origin/master
diff --git a/src/Common.js b/src/Common.js
index 7bb14cb..3a63c41 100644
--- a/src/Common.js
+++ b/src/Common.js
@@ -64,6 +64,7 @@ export const sanitize = (text, item) => {
  **********************************************************************************************/
 export const formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",", dollarSign = '$') => {
     try {
+        if (amount === null) return null;
         // Truncate to the apprpriate number of decimals after the decimal point
         decimalCount = Math.abs(decimalCount);
         decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
```

