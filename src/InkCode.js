import { LitElement, html } from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';
import hljs from 'highlight.js';


hljs.registerLanguage("julia",function(e){var r={keyword:"in isa where baremodule begin break catch ccall const continue do else elseif end export false finally for function global if import importall let local macro module quote return true try using while type immutable abstract bitstype typealias ",literal:"true false ARGS C_NULL DevNull ENDIAN_BOM ENV I Inf Inf16 Inf32 Inf64 InsertionSort JULIA_HOME LOAD_PATH MergeSort NaN NaN16 NaN32 NaN64 PROGRAM_FILE QuickSort RoundDown RoundFromZero RoundNearest RoundNearestTiesAway RoundNearestTiesUp RoundToZero RoundUp STDERR STDIN STDOUT VERSION catalan e|0 eu|0 eulergamma golden im nothing pi γ π φ ",built_in:"ANY AbstractArray AbstractChannel AbstractFloat AbstractMatrix AbstractRNG AbstractSerializer AbstractSet AbstractSparseArray AbstractSparseMatrix AbstractSparseVector AbstractString AbstractUnitRange AbstractVecOrMat AbstractVector Any ArgumentError Array AssertionError Associative Base64DecodePipe Base64EncodePipe Bidiagonal BigFloat BigInt BitArray BitMatrix BitVector Bool BoundsError BufferStream CachingPool CapturedException CartesianIndex CartesianRange Cchar Cdouble Cfloat Channel Char Cint Cintmax_t Clong Clonglong ClusterManager Cmd CodeInfo Colon Complex Complex128 Complex32 Complex64 CompositeException Condition ConjArray ConjMatrix ConjVector Cptrdiff_t Cshort Csize_t Cssize_t Cstring Cuchar Cuint Cuintmax_t Culong Culonglong Cushort Cwchar_t Cwstring DataType Date DateFormat DateTime DenseArray DenseMatrix DenseVecOrMat DenseVector Diagonal Dict DimensionMismatch Dims DirectIndexString Display DivideError DomainError EOFError EachLine Enum Enumerate ErrorException Exception ExponentialBackOff Expr Factorization FileMonitor Float16 Float32 Float64 Function Future GlobalRef GotoNode HTML Hermitian IO IOBuffer IOContext IOStream IPAddr IPv4 IPv6 IndexCartesian IndexLinear IndexStyle InexactError InitError Int Int128 Int16 Int32 Int64 Int8 IntSet Integer InterruptException InvalidStateException Irrational KeyError LabelNode LinSpace LineNumberNode LoadError LowerTriangular MIME Matrix MersenneTwister Method MethodError MethodTable Module NTuple NewvarNode NullException Nullable Number ObjectIdDict OrdinalRange OutOfMemoryError OverflowError Pair ParseError PartialQuickSort PermutedDimsArray Pipe PollingFileWatcher ProcessExitedException Ptr QuoteNode RandomDevice Range RangeIndex Rational RawFD ReadOnlyMemoryError Real ReentrantLock Ref Regex RegexMatch RemoteChannel RemoteException RevString RoundingMode RowVector SSAValue SegmentationFault SerializationState Set SharedArray SharedMatrix SharedVector Signed SimpleVector Slot SlotNumber SparseMatrixCSC SparseVector StackFrame StackOverflowError StackTrace StepRange StepRangeLen StridedArray StridedMatrix StridedVecOrMat StridedVector String SubArray SubString SymTridiagonal Symbol Symmetric SystemError TCPSocket Task Text TextDisplay Timer Tridiagonal Tuple Type TypeError TypeMapEntry TypeMapLevel TypeName TypeVar TypedSlot UDPSocket UInt UInt128 UInt16 UInt32 UInt64 UInt8 UndefRefError UndefVarError UnicodeError UniformScaling Union UnionAll UnitRange Unsigned UpperTriangular Val Vararg VecElement VecOrMat Vector VersionNumber Void WeakKeyDict WeakRef WorkerConfig WorkerPool "},t="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",a={l:t,k:r,i:/<\//},n={cN:"number",b:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,r:0},o={cN:"string",b:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},i={cN:"subst",b:/\$\(/,e:/\)/,k:r},l={cN:"variable",b:"\\$"+t},c={cN:"string",c:[e.BE,i,l],v:[{b:/\w*"""/,e:/"""\w*/,r:10},{b:/\w*"/,e:/"\w*/}]},s={cN:"string",c:[e.BE,i,l],b:"`",e:"`"},d={cN:"meta",b:"@"+t},u={cN:"comment",v:[{b:"#=",e:"=#",r:10},{b:"#",e:"$"}]};return a.c=[n,o,c,s,d,u,e.HCM,{cN:"keyword",b:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{b:/<:/}],i.c=a.c,a});
hljs.registerLanguage("julia-repl",function(a){return{c:[{cN:"meta",b:/^julia>/,r:10,starts:{e:/^(?![ ]{6})/,sL:"julia"},aliases:["jldoctest"]}]}});
hljs.registerLanguage("glsl",function(e){return{k:{keyword:"break continue discard do else for if return while switch case default attribute binding buffer ccw centroid centroid varying coherent column_major const cw depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip triangles triangles_adjacency uniform varying vertices volatile writeonly",type:"atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBufferiimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void",built_in:"gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow",literal:"true false"},i:'"',c:[e.CLCM,e.CBCM,e.CNM,{cN:"meta",b:"#",e:"$"}]}});
hljs.registerLanguage("r",function(e){var r="([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";return{c:[e.HCM,{b:r,l:r,k:{keyword:"function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...",literal:"NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"},r:0},{cN:"number",b:"0[xX][0-9a-fA-F]+[Li]?\\b",r:0},{cN:"number",b:"\\d+(?:[eE][+\\-]?\\d*)?L\\b",r:0},{cN:"number",b:"\\d+\\.(?!\\d)(?:i\\b)?",r:0},{cN:"number",b:"\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",r:0},{cN:"number",b:"\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",r:0},{b:"`",e:"`",r:0},{cN:"string",c:[e.BE],v:[{b:'"',e:'"'},{b:"'",e:"'"}]}]}});



function trim(content){
    var line, leading;
    var out = [];
    var left = Infinity;
    var lines = content.split('\n');
    for (var i = 0; i < lines.length; i++) {
        line = lines[i];
        if(line.trim().length === 0){
            continue;
        }
        leading = line.search(/\S/);
        if(leading < left){
            left = leading;
        }
    }
    for (var i = 0; i < lines.length; i++) {
        line = lines[i];
        if(i == 0 && line.trim().length === 0){
            continue;
        }
        out.push(line.slice(left));
    }
    // This slices the top and bottom if there are extra blanks.
    for (var top = 0; top < out.length; top++) {
        if(out[top].trim().length > 0){
            break
        }
    }
    for (var bot = out.length-1; bot >= 0; bot--) {
        if(out[bot].trim().length > 0){
            break
        }
    }
    return out.slice(top, bot+1).join('\n');
}


class InkCode extends LitElement {
    static get properties() {
        return {
            code: String,
            language: String,
            copy: {type: Boolean, reflect:true},
            compact: {type: Boolean, reflect:true},
            _copyText: String,
        };
    }
    constructor() {
        super();
        this.code = this.textContent;
        this.language = '';
        this.copy = false;
        this.compact = false;
        this._copyText = 'copy';
    }
    firstUpdated() {
        // This updates the inside of the element to be in-line with the code property.
        var shadow = this.shadowRoot;
        shadow.addEventListener('slotchange', () => {
            this.code = this.textContent;
        });
    }
    _hideRules(){
        return !(this.parentElement && this.parentElement.nodeName === 'INK-ARTICLE');
    }
    _copyToClipboard() {
        // From https://github.com/google/material-design-lite/blob/master/docs/_assets/snippets.js
        var snipRange = document.createRange();
        snipRange.selectNodeContents(this.shadowRoot.querySelector('code'));
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(snipRange);
        var result = false;
        try {
            result = document.execCommand('copy');
            this._copyText = 'done';
        } catch (err) {
            // Copy command is not available
            console.error(err);
            this._copyText = 'error';
        }

        // Return to the copy button after a second.
        setTimeout(() => {this._copyText = 'copy'}, 1000);

        selection.removeAllRanges();
        return result;
    }
    render() {

        this.code = trim(this.code);

        if(this.textContent !== this.code && this.code){
          this.textContent = this.code;
        }

        var codeDom = document.createElement('code');
        if(this.language){
            codeDom.classList.add(this.language);
        }
        if(this.code){
            codeDom.textContent = this.code;
            hljs.highlightBlock(codeDom);
        }

        return html`
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/xcode.min.css">
            <style>
              code {
                line-height: 1.2;
                border:none;
              }
              hr {
                width: calc(100vw);
                margin-left: calc(-50vw + 342px);
                border-top: 1px solid #DDD;
                border-left: transparent;
              }
              @media screen and (max-width: 710px) {
                hr {
                  width: calc(100vw);
                  margin-left: -18px;
                }
              }
              #code-wrapper{
                position: relative;
                padding: ${this.compact? '0px' : '10px'};
                overflow: hidden;
              }
              button{
                position: absolute;
                top: 0;
                right: 0;
                text-transform: uppercase;
                border: none;
                cursor: pointer;
                background: #e0e0e0;
                outline: none;
              }
            </style>
            <hr ?hidden="${ this.compact || this._hideRules() }">
            <div id="code-wrapper">
              <button ?hidden="${ !this.copy }" title="copy to clipboard" @click="${ this._copyToClipboard }">${ this._copyText}</button>
              <pre><code class="hljs ${ this.language }">${ unsafeHTML(codeDom.innerHTML) }</code></pre>
            </div>
            <hr ?hidden="${ this.compact || this._hideRules() }">
            <slot hidden></slot>
        `;
    }
}

customElements.define('ink-code', InkCode);

class InkDemo extends LitElement {
    static get properties() {
        return {
            code: String,
            language: String,
            copy: Boolean,
            codeOnly: {
                type:Boolean,
                attribute: 'code-only',
                reflect: true,
            },
        };
    }
    constructor() {
        super();
        this.code = '';
        this.language = 'html';
        this.copy = true;
        this.codeOnly = false;
    }
    firstUpdated() {
        // This updates the inside of the element to be in-line with the code property.
        var shadow = this.shadowRoot;
        this.code = this.innerHTML;
        shadow.addEventListener('slotchange', () => {
            this.code = this.innerHTML;
        });
    }
    render() {
        return html`
         <style>
          :host{
            display: block;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
            margin-bottom: 40px;
          }
          #demo{
            padding: 25px;
            border-bottom: 1px solid #e0e0e0;
          }
        </style>
        <div id="demo" ?hidden="${ this.codeOnly }"><slot></slot></div>
        <ink-code .code="${ this.code }" language="${ this.language }" ?copy="${ this.copy }"></ink-code>
        `;
    }
}

customElements.define('ink-demo', InkDemo);


export { InkCode, InkDemo };
