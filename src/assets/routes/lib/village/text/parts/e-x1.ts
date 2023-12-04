import e_x1_bin from './e-x1.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "e.002",
			"rotation": [
				0.7071068286895752,
				0,
				0,
				0.7071068286895752
			]
		}
	],
	"meshes": [
		{
			"name": "Text.009",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"indices": 3
				}
			]
		}
	],
	"accessors": [
		{
			"bufferView": 0,
			"componentType": 5126,
			"count": 354,
			"max": [
				-0.054656460881233215,
				0,
				0.1831015646457672
			],
			"min": [
				-0.2611461281776428,
				0,
				-0.19658657908439636
			],
			"type": "VEC3"
		},
		{
			"bufferView": 1,
			"componentType": 5126,
			"count": 354,
			"type": "VEC3"
		},
		{
			"bufferView": 2,
			"componentType": 5126,
			"count": 354,
			"type": "VEC2"
		},
		{
			"bufferView": 3,
			"componentType": 5123,
			"count": 1056,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 4248,
			"byteOffset": 0,
			"target": 34962
		},
		{
			"buffer": 0,
			"byteLength": 4248,
			"byteOffset": 4248,
			"target": 34962
		},
		{
			"buffer": 0,
			"byteLength": 2832,
			"byteOffset": 8496,
			"target": 34962
		},
		{
			"buffer": 0,
			"byteLength": 2112,
			"byteOffset": 11328,
			"target": 34963
		}
	],
	"buffers": [
		{
			"byteLength": 13440,
			"uri": e_x1_bin
		}
	]
}