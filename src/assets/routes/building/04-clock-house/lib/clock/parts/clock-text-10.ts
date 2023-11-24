import clock_text_10_bin from './clock-text-10.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
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
			"name": "clock, text, 10",
			"rotation": [
				0,
				0.49999964237213135,
				0,
				0.8660256266593933
			],
			"translation": [
				-0.718957781791687,
				0.022804584354162216,
				-0.4150907099246979
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"name": "Material.004",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0,
					0,
					0,
					1
				],
				"metallicFactor": 0,
				"roughnessFactor": 0.5
			}
		}
	],
	"meshes": [
		{
			"name": "Text.008",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 58,
			"max": [
				0.02120622619986534,
				0.0010000000474974513,
				0.10894941538572311
			],
			"min": [
				-0.020428014919161797,
				-0.0010000000474974513,
				-0.16342411935329437
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 58,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 58,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 156,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 590,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 592,
			"uri": clock_text_10_bin
		}
	]
}