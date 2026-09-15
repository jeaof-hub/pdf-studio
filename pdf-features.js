/* Shared document operations; also exported for fixture validation. */
(function(root){
async function compressPreservingText(data,lib){
 const doc=await lib.PDFDocument.load(data,{updateMetadata:false});
 const optimized=await doc.save({useObjectStreams:true,updateFieldAppearances:false});
 return {data:optimized.length<data.length?optimized:data,optimized:optimized.length<data.length,originalSize:data.length,outputSize:Math.min(optimized.length,data.length)};
}
function fieldKind(f,lib){for(const [name,type] of [['text','PDFTextField'],['checkbox','PDFCheckBox'],['radio','PDFRadioGroup'],['dropdown','PDFDropdown'],['list','PDFOptionList']])if(f instanceof lib[type])return name;return 'unsupported'}
async function fillFields(doc,values,lib,fontkit,fontBytes){
 const form=doc.getForm();if(form.hasXFA())throw Error('ไม่รองรับฟอร์ม XFA กรุณาใช้ PDF แบบ AcroForm');
 let font;const changed=[];
 for(const item of values){const f=form.getField(item.name);if(f.isReadOnly())continue;const kind=fieldKind(f,lib);
 if(kind==='text'){const max=f.getMaxLength();if(max&&item.value.length>max)throw Error(`ช่อง ${item.name} รับได้ไม่เกิน ${max} ตัวอักษร`);f.setText(item.value)}
 else if(kind==='checkbox'){item.value?f.check():f.uncheck()}
 else if(['radio','dropdown','list'].includes(kind)){const v=Array.isArray(item.value)?item.value:[item.value];if(v.some(x=>!f.getOptions().includes(x)))throw Error('ตัวเลือกฟอร์มไม่ถูกต้อง');if(!v.length)f.clear();else f.select(kind==='radio'?v[0]:v)}else continue;
 changed.push(f);
 }
 if(changed.some(f=>['text','dropdown','list'].includes(fieldKind(f,lib)))){doc.registerFontkit(fontkit);font=await doc.embedFont(fontBytes,{subset:true})}
 for(const f of changed){if(f.needsAppearancesUpdate()){if(['text','dropdown','list'].includes(fieldKind(f,lib)))f.updateAppearances(font);else f.updateAppearances()}}
 return doc.save({updateFieldAppearances:false});
}
root.PDFFeatures={compressPreservingText,fieldKind,fillFields};if(typeof module!=='undefined')module.exports=root.PDFFeatures;
})(globalThis);
