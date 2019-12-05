(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{247:function(e,s,n){"use strict";n.r(s);var t=n(0),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"spring-boot返回文件流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot返回文件流"}},[e._v("#")]),e._v(" spring boot返回文件流")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('@GetMapping(value = "/file/{fileName}")\npublic ResponseEntity<FileSystemResource> getFile(@PathVariable("fileName") String fileName) throws FileNotFoundException {\n\tFile file = new File(filePath, fileName);\n\tif (file.exists()) {\n\t\treturn export(file);\n\t}\n\tSystem.out.println(file);\n\treturn null;\n}\n\n\npublic ResponseEntity<FileSystemResource> export(File file) {\n\tif (file == null) {\n\t\treturn null;\n\t}\n\tHttpHeaders headers = new HttpHeaders();\n\theaders.add("Cache-Control", "no-cache, no-store, must-revalidate");\n\theaders.add("Content-Disposition", "attachment; filename=" + file.getName());\n\theaders.add("Pragma", "no-cache");\n\theaders.add("Expires", "0");\n\theaders.add("Last-Modified", new Date().toString());\n\theaders.add("ETag", String.valueOf(System.currentTimeMillis()));\n\treturn ResponseEntity.ok().headers(headers).contentLength(file.length()).contentType(MediaType.parseMediaType("application/octet-stream")).body(new FileSystemResource(file));\n}\n\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);